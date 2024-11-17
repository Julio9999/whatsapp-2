interface Props {
    title: string;
}
export const TitleSection = ({title}: Props) => {
    return (
        <span className="text-[22px] font-bold text-white">{title}</span>
    )
}