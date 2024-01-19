interface Props {
    text: React.ReactNode;
    alertType?: 'primary' | 'success' | 'warning' | 'danger';
    onClose: () => void;
}

const Alert = ({
    text,
    alertType = 'primary',
    onClose
}: Props) => {
    const alertClass = `alert alert-${alertType} alert-dismissible fade show`;
    return (
        <div className={alertClass}>
            {text}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={onClose}
            ></button>
        </div>
    )
}

export default Alert
