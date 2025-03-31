export interface TitleProps {
  title: string;
  description: string;
}

export default function TitleComponent({ title, description }: TitleProps) {
  return (
    <div className="grid bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 backdrop-blur-3xl sm:p-8 p-5 gap-4 mb-8 rounded-2xl shadow-md justify-items-center">
      <h1 className="sm:text-4xl text-2xl w-fit uppercase font-bold text-center text-primary">
        {title}
      </h1>

      <div className="max-w-4xl mx-auto">
        <p className="sm:text-lg text-xs text-center text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}
