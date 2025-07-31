
interface FooterProps {
  title: string;
}

export default function Footer({ title }: FooterProps) {
  return (
    <footer className="text-center mt-10 text-sm text-gray-600">
      {title}
    </footer>
  );
}