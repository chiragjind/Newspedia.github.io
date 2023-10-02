import React from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import image from "./download.jpg";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";


const News =(props) => {
  

   const [articles,setarticles] = useState([])
   const [loading,setloading] = useState(true)
   const [page,setpage] = useState(1)
   const [totalResults,settotalResults] = useState(0)
  
  const capitalization = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };



  const  updatenews= async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=314e92c8a4c644cd9c6e0e417a1074c1&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(20);
    setloading(true)
    let data = await fetch(url);
    let parsedata = await data.json();
    props.setProgress(50);
    setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `${capitalization(props.category)}-News_Monkey`;
   updatenews();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.category])
  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=314e92c8a4c644cd9c6e0e417a1074c1&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();
  //   // this.setState({
  //   //   articles: parsedata.articles,
  //   //   totalResults: parsedata.totalResults,
  //   //   loading: false,
  //   // });
  //   this.updatenews();
  // }

  // const handlepreviousclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${props.category}&apiKey=314e92c8a4c644cd9c6e0e417a1074c1&page=${
    //   this.state.page - 1
    // }&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedata = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedata.articles,
    //   loading: false,
    // });
    // console.log("previous");
    // this.setState({ page: this.state.page - 1 });
  //   setpage(page - 1)
  //   updatenews();
  // };
  // const handlenextclick = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${props.category}&apiKey=314e92c8a4c644cd9c6e0e417a1074c1&page=${
    //     this.state.page + 1
    //   }&pageSize=${props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedata = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedata.articles,
    //     loading: false,
    //   });
    // }
    // console.log("next");
    // this.setState({ page: this.state.page + 1 });
    // setpage(page + 1)
    // updatenews()
    
  // };

  const fetchMoreData = async () =>{
    // this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=314e92c8a4c644cd9c6e0e417a1074c1&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page + 1)
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
    // setloading(false)
    // this.setState({
    //   articles: articles.concat(parsedata.articles),
    //   totalResults: parsedata.totalResults,
    //   loading: false,
    //   totalResults: parsedata.totalResults
    // });
  }

 
    return (
      <>
        <h1 className="text-center" style={{marginTop: '90px'}}>
          {" "}
         {capitalization(props.category)} news
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={(!loading && <Spinner/>)}
        >
          <div className="container my-3">
          <div className="row m-auto">
            {articles.map((element) => {
              return (
                <div className="col-md-4 col-sm-6 col-10 m-auto" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 18) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "Vitamin D supplements may reduce the risk of major cardiovascular events such as heart"
                    }
                    imageurl={element.urlToImage ? element.urlToImage : image}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
                
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlepreviousclick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            Next &rarr;{" "}
          </button>
        </div> */}
        </>
    
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News
