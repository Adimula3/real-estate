import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";


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
                console.log(data);
            });
    }

    function  handlePageClick({selected: selectedPage}) {
        console.log("selectedPage", selectedPage);
        setCurrentPage(selectedPage);
    }

    // 0, 10, 20, 30......//
    const offset = currentPage * PER_PAGE;
    // console.log("offset", offset)

    const currentPageData = data
        .slice(offset, offset + PER_PAGE)
        .map((res, index) => <img key={index} src={res.url} /> );
    //console.log("currentPage", currentPage);

    // total pages
    const pageCount = Math.ceil(data.length / PER_PAGE);
    return (
        <div>

            {data.map((data) => {
                return <div className="col-lg-3 col-6">
                    <div className="card">
                        <img src={data.url} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="list-team d-flex">
                                <h6 className="ml-2">Joseph doe</h6>
                                <span className="text-right">2 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>;

                }

            )}
            
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