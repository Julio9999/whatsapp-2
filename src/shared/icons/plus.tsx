interface Props {
    className?: string;
}

export const Plus = ({className}: Props) => {
    return (
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className={`text-iconColor cursor-pointer ${className}`}><title>Add status</title><path fill="currentColor" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg>
    )
}