import '../../styles/button.css';

const GenericButton = ({ text, onClick, color, textColor }) => {
    return (
        <button
            className="genericButton"
            onClick={onClick}
            onMouseEnter={(e) => {
                e.target.style.cursor = 'pointer';
            }}
            onMouseLeave={(e) => {
                e.target.style.cursor = 'default';
            }}
            style={{
                backgroundColor: color || 'var(--color-one)',
                color: textColor || 'white'
            }}
        >
            {text}
        </button>
    );
}

export default GenericButton;