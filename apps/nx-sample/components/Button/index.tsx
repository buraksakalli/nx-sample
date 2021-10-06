type ButtonProps = {
  title: string;
  link: string;
};

export const Button = ({ title, link }: ButtonProps) => (
  <a href={link}>{title}</a>
);
