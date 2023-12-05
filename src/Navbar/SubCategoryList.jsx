const SubCategoryList = ({
    list
}) => {
    return(
        <ul className="subcategory-list">
            {list.map((item)=>{
                return(
                    <li className="subcategory-list-item text-teal" key={item}> 
                        <a href="/item">{item}</a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SubCategoryList;