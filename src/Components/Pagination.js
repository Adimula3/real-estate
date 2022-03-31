import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import HousingCard from "./HousingCard";


const PER_PAGE = 8;
function Pagination() {
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        fetch('http://localhost:8000/houses')
            .then((res) => res.json())
            .then ((data) => {
                setData(data);
                // console.log(data);
            });
    }

    function  handlePageClick({selected: selectedPage}) {
        //console.log("selectedPage", selectedPage);
        setCurrentPage(selectedPage);


    }

    // 0, 8, 16./...../
    const offset = currentPage * PER_PAGE;
     console.log("offset", offset)

    const currentPageData = data
        .slice(offset, offset + PER_PAGE)
        .map((res, index) =>
            <div className="col-lg-3 col-6 display-card">
                <HousingCard key={index} res={res} />
            </div>);

      console.log("currentPage", currentPageData);

    // total pages
    const pageCount = Math.ceil(data.length / PER_PAGE);
    return (

        <section className="container-fluid display">
            <div className="row">
            {currentPageData}
            </div>

            <ReactPaginate
            previousLabel={"<- Previous"}
                nextLabel={"Next ->"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination_link--active"}
                />

        </section>
    );
}

export default Pagination;
