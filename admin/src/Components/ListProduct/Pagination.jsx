import React from 'react';

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalProducts/productsPerPage); i++) {
        pageNumbers.push(i);
    }
return (
    <div>
        <ul className="pagination">
            {pageNumbers.map(number=>(
                <li key={number} className="pageitem">
                    <a onClick={()=>paginate(number)}   href="!#" className="pagelink">
                        {number}
                    </a>

                </li>
            ))}
        </ul>
    </div>
)
}

export default Pagination;