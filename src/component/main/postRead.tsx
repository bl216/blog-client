import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import { getPost, IPost } from "./api/api";
import * as DOMPurify from "dompurify";
//import PostTitle from "./PostTitle";
function PostRead() {

    const url = "http://localhost:8080/se/1";
    const [data, setData] = useState([]);
    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }


    /*
    const { id } = useParams();
    const [data, setData] = useState<IPost>({});
    useEffect(() => {
        getPost(id + "").then((res) => setData(res));
    }, []);

     */
    return (
        <div>
            {data.map((dataObj:any, index) => (
                <div
                    style={{
                        width: "60vw",
                        whiteSpace: "normal",
                    }}
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(String(dataObj.post_content)),
                    }}
                />
            ))}
        </div>
    );
}
export default PostRead;
