import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import HousingModal from "./HousingModal";
import PropertyDetails from "./Property-details";


const PER_PAGE = 8;
function Pagination() {
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [isQuickView, setQuickView] = useState(false);


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
            <div className="row">
            <div className="col-lg-3 col-6">
            <div className="card" onClick={() => {setQuickView(true)}}>
                <img key={index} src={res.url} />
                <div className="card-body">
                    <div className="list-team d-flex">
                        <h6 className="ml-2">Joseph doe</h6>
                        <span className="text-right">2 weeks ago</span>
                    </div>
                </div>
            </div>
        </div>
                {/** Modals Here */}
                <HousingModal open={isQuickView} onClose={() => setQuickView(false)}>
                    <PropertyDetails data={data}/>
                </HousingModal>
            </div> );

      console.log("currentPage", currentPageData);

    // total pages
    const pageCount = Math.ceil(data.length / PER_PAGE);
    return (

        <div>
            {currentPageData}

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

        </div>
    );
}

export default Pagination;
