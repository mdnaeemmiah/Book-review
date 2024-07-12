import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
// import Details from "../Pages/Details";


const Single = ({blog}) => {
    
    const {image,bookId,bookName,author,tags,category,rating,review}= blog;
    return (
        <div>
            <Link to={`/details/${bookId}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" 
                        src={image} />
						<div className="p-6 space-y-2">
                            <div className="flex justify-between text-green-400">
                                <p >Young Adult</p>
                                <p>Identity</p>
                            </div>
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
							<span className="text-2xl dark:text-gray-600">{author}</span>
                            <hr />
							<div className="flex justify-between">
                                <p>{category}</p>
                              <div className="flex gap-5">
                              <p>{rating}</p>
                              <FaRegStar></FaRegStar>
                              </div>
                            </div>
						</div>
					</Link>
                    <div>

                    </div>
        </div>
    );
};

export default Single;