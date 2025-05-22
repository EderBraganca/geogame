import '../../styles/card.css'

const HowToPlayCard = ({ title, content }) => {
    return (
        <div className="cardContent">
            <div className="cardTitle">
                {title}
            </div>

            <div className="content">
                {content}
            </div>
        </div >
    )
}

export default HowToPlayCard