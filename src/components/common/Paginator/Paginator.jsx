import React, {useState} from "react";
import s from "../Paginator/Paginator.module.css";

const Paginator = ({totalItemsCount, itemsCountOnPage, countOfPagesOnPage = 10, pageNumber, pageChanged}) => {

    let countOfPages = Math.ceil(totalItemsCount / itemsCountOnPage)

    let [pagesBlock, setPagesBlock] = useState(1);

    let lastPageNumber = pagesBlock * countOfPagesOnPage;
    let firstPageNumber = lastPageNumber - countOfPagesOnPage + 1;

    const nextPage = () => {
        setPagesBlock(pagesBlock + 1);
    }
    const prevPage = () => {
        setPagesBlock(pagesBlock - 1);
    }

    let arrOfPages = new Array(countOfPages);

    let pages = arrOfPages.fill(1).map((_, index) => index + 1).slice(firstPageNumber - 1, lastPageNumber).map(u =>
        <span
            className={(pageNumber === u) ? s.activePage : ""/*????????*/}
            onClick={() => {
                pageChanged(u)
            }}>{u}</span>)

    return <div>
        {(pagesBlock * countOfPagesOnPage > countOfPagesOnPage) && <button onClick={() => prevPage()}>Prev</button>}
        {pages}
        {(pagesBlock * countOfPagesOnPage < countOfPages) && <button onClick={() => nextPage()}>Next</button>}
    </div>

}

export default Paginator;