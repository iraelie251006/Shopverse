import StarIcon from "./StarIcon";

export default function Stars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const fill = index < rating ? "fill-yellow-400" : "fill-muted";
    const stroke =
      index < rating ? "stroke-yellow-400" : "stroke-muted-foreground";

    return <StarIcon key={index} className={`w-5 h-5 ${fill} ${stroke}`} />;
  });

  return <div className="flex items-center gap-0.5">{stars}</div>;
}
