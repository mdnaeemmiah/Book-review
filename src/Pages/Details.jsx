import { Link, useLoaderData } from "react-router-dom";
import { saveBlogs } from "../Utility";


const Details = () => {
    const load = useLoaderData();
    const { image,bookId,bookName,author,tags,category,rating,review} = load;

    const handleBookmark = blog => {
        saveBlogs(blog);
     }

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src='https://i.ibb.co/qDNSqmK/studio-media-9-Da-OYUYn-Ols-unsplash.jpg' alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                        <span className="text-xs dark:text-gray-600">February 19, 2021</span>
                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        <div className=" flex gap-5 py-6">
                            <Link onClick={() => handleBookmark(load)}  to='' href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Read
                                <svg className="w-4 h-4 ml-1 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                            <Link onClick={() => handleBookmark(load)}  to={`wish`} href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Wishlist
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>

                </a>


            </div>
        </section>
    );
};

export default Details;