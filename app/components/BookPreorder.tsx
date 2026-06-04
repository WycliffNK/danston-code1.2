type Props = {
  bookTitle: string;
  purchaseUrl: string;
  price: string;
};

export function BookPreorderCTA({ bookTitle, purchaseUrl, price }: Props) {
  return (
    <a
      href={purchaseUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pre-order ${bookTitle} for ${price}`}
      className="self-start inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[2px] uppercase text-cream bg-navy border border-navy rounded-full px-7 py-3.5 [transition:background-color_220ms_var(--ease-out),color_220ms_var(--ease-out),border-color_220ms_var(--ease-out)] hover:bg-gold hover:border-gold hover:text-navy"
    >
      Pre-order yours
      <span aria-hidden="true" className="opacity-60">·</span>
      <span>{price}</span>
    </a>
  );
}
