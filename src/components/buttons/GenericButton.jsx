import '../../styles/button.css';

const GenericButton = ({ text, onClick, color, textColor, width, height, fontSize}) => {
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
                color: textColor || 'white',
                width: width || 'auto',
                height: height || 'auto',
                fontSize: fontSize || '14px',

            }}>
            {text}
        </button>
    );
}

export default GenericButton;