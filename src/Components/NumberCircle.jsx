import "./styles.css";

const NumberCircle = ({
    number,
    size
}) => {
    return (
        <div>
             <div className={`circle ${size}`}>
                <span>
                    {number}
                </span>
            </div>
        </div>
       
    );
}

export default NumberCircle;