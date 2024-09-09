import "./styles.css";

type CardProps = {
  url: string;
  title: string;
  price: number;
};

export default function Card({ url, title, price }: CardProps) {
  return (
    <article className="card__container">
      <figure>
        <img src={url} alt={title} />
        <figcaption style={{ display: "none" }}>
          Descripción de la imagen
        </figcaption>
      </figure>
      <header>
        <h2 className="card__title">{title}</h2>
      </header>
      <p className="card__price">${price}</p>
    </article>
  );
}
