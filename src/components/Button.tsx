interface Props {
    text: React.ReactNode
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    onClick: () => void
}

const Button = ({ text, onClick, color="primary" }: Props) => {
    return (
        <button
            type="button"
            className={'btn btn-' + color}
            onClick={onClick}
        >{text}</button>
    )
}

export default Button
