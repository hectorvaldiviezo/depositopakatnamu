"use client";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  BadgeCheck,
  Box,
  LoaderPinwheel,
  Search,
  Send,
  Trash,
} from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { errorToast, successToast } from "@/lib/core.function";
import { searchByDNI, searchByRUC } from "@/lib/search.actions";
import { QuotationRequest } from "./lib/quotation.interface";
import { sendQuotation } from "./lib/quotation.actions";
import useProductCartStore from "./lib/quotation.store";
import { Skeleton } from "../ui/skeleton";
import { useSedes } from "../sedes/lib/sedes.hook";
import Link from "next/link";

const FormSchema = z.object({
  sedeId: z.string().nonempty("Debes seleccionar una sede"),
  document: z
    .string()
    .nonempty("Debes ingresar tu DNI o RUC")
    .regex(/^\d+$/, { message: "Solo se permiten números" }) // Solo números
    .refine((val) => val.length === 8 || val.length === 11, {
      message: "Debes ingresar un DNI (8 dígitos) o un RUC (11 dígitos)",
    }),
  fullName: z.string().nonempty("Debes ingresar tu nombre completo"),
  email: z.string().email("Debes ingresar un email válido"),
  phone: z.string().nonempty("Debes ingresar tu número de celular"),
  telephone: z.string(),
  message: z
    .string()
    .nonempty("Debes ingresar un mensaje")
    .min(50, "Mínimo 50 caracteres"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sedeId: "",
      document: "",
      fullName: "",
      email: "",
      phone: "",
      telephone: "",
      message: "",
    },
    mode: "onChange", // Valida en cada cambio
    criteriaMode: "all",
  });

  const { products, updateProduct, removeProduct } = useProductCartStore();

  const [loadingSearch, setLoadingSearch] = useState(false);
  const [loadgingSubmit, setLoadingSubmit] = useState(false);

  const validateDocumentNumber = async () => {
    setLoadingSearch(true);
    const documentNumber = form.getValues("document");
    if (documentNumber.length === 8) {
      await searchByDNI(documentNumber)
        .then((response) => {
          if (response.status === 200) {
            form.setValue("fullName", response.data.nombre);
          }
        })
        .catch((error: any) => {
          errorToast(error.response.data.message);
        })
        .finally(() => {
          setLoadingSearch(false);
        });
    } else if (documentNumber.length === 11) {
      await searchByRUC(documentNumber)
        .then((response) => {
          if (response.status === 200) {
            form.setValue("fullName", response.data.nombre_o_razon_social);
          }
        })
        .catch((error: any) => {
          errorToast(error.response.data.message);
        })
        .finally(() => {
          setLoadingSearch(false);
        });
    } else {
      errorToast("Debes ingresar un documento válido.");
      setLoadingSearch(false);
    }
  };

  const sedes = useSedes(2);

  async function onSubmit() {
    setLoadingSubmit(true);
    const data = await form.getValues();

    const quotationRequest: QuotationRequest = {
      sedeId: Number(data.sedeId),
      document: data.document,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      telephone: data.telephone,
      message: data.message,
      products: products.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity ?? 1,
          name: product.name,
        };
      }),
    };

    await sendQuotation(quotationRequest)
      .then((response) => {
        if (response.status === 200) {
          successToast(response.message);
        } else {
          errorToast(response.message);
        }
      })
      .catch((error: any) => {
        errorToast(error.response.data.message);
      })
      .finally(() => {
        setLoadingSubmit(false);
        form.reset();
      });
    setLoadingSubmit(false);
  }

  return (
    <Form {...form}>
      <form
        action=""
        className="max-w-(--breakpoint-xl) flex items-center justify-center w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col justify-center max-w-(--breakpoint-md)">
          <div className="border-l-4 border-primary px-2">
            <div className="text-sm text-muted-foreground">
              Complete los siguientes campos para poder establecer contacto
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 py-4 w-full">
            <FormField
              control={form.control}
              name="sedeId"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-darksecondary font-semibold">
                    Sede<span className="text-destructive ml-1">*</span>
                  </FormLabel>
                  {sedes.isLoading ? (
                    <Skeleton className="h-9 w-full" />
                  ) : (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una sede" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {sedes.data!.sedes.map((sede) => (
                          <SelectItem key={sede.id} value={sede.id.toString()}>
                            {sede.razon_social} - {sede.suc_abrev}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darksecondary font-semibold">
                    DNI o RUC
                    <span className="text-destructive ml-1">*</span>
                  </FormLabel>
                  <div className="flex gap-4">
                    <FormControl>
                      <Input
                        placeholder="11111111"
                        minLength={8}
                        maxLength={11}
                        {...field}
                      />
                    </FormControl>
                    <Button
                      className="flex items-center gap-2 cursor-pointer"
                      type="button"
                      disabled={loadingSearch}
                      onClick={validateDocumentNumber}
                    >
                      {loadingSearch ? (
                        <LoaderPinwheel className="w-4 h-4 animate-spin" />
                      ) : (
                        <Search className="w-4 h-4" />
                      )}
                      <span>Validar Documento</span>
                    </Button>
                  </div>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darksecondary font-semibold">
                    Razon social o Nombre completo
                    <span className="text-destructive ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input disabled placeholder="Empresa..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darksecondary font-semibold">
                    Email
                    <span className="text-destructive ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@gmail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-darksecondary font-semibold">
                      Celular
                      <span className="text-destructive ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="982648215" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-darksecondary font-semibold">
                      Teléfono
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="048483" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darksecondary font-semibold">
                    Mensaje <span className="text-destructive ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Requiero ..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator className="w-full my-4" />
            {products.length === 0 && (
              <div className="flex justify-between items-center w-full">
                <div className="text-muted-foreground text-sm">
                  No hay productos seleccionados para la cotización.
                </div>
                <Link href="/productos">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex gap-2 cursor-pointer"
                  >
                    <Box className="w-4 h-4" />
                    Ir a Productos
                  </Button>
                </Link>
              </div>
            )}

            {products.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold">Productos seleccionados</h3>
                <div className="flex flex-col gap-1">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="text-gray-700 dark:text-gray-300 flex gap-1 items-center w-full justify-between pl-2"
                    >
                      <div className="flex items-center gap-1">
                        <BadgeCheck className="size-4 text-secondary" />
                        <span className="text-secondary font-bold">
                          {product.name}
                        </span>
                        {" - "}
                        <span className="text-muted-foreground">
                          {product.unit}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Input
                          type="number"
                          placeholder="Cantidad"
                          min="1"
                          required
                          value={product.quantity || ""}
                          onChange={(e) => {
                            const quantity = parseInt(e.target.value, 10);
                            if (quantity > 0) {
                              updateProduct({
                                ...product,
                                quantity,
                              });
                            }
                          }}
                          className="ml-2 w-28 h-7 text-center"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-7 w-7 p-0"
                          onClick={() => removeProduct(product.id)}
                        >
                          <span className="sr-only">Eliminar</span>
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <CardFooter className="p-0 flex justify-end">
            <Button
              variant={"secondary"}
              className="flex gap-2 cursor-pointer"
              disabled={loadgingSubmit || !form.formState.isValid}
            >
              {loadgingSubmit ? (
                <LoaderPinwheel className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              Solicitar Cotización
            </Button>
          </CardFooter>
        </div>
      </form>
    </Form>
  );
}
