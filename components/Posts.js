import { useCollection } from "react-firebase-hooks/firestore";
import { db, app } from "../firebase";
import { getFirestore, collection } from "firebase/firestore";
import Post from "./Post";

const Posts = () => {
  const [realtimePosts, loading, error] = useCollection(
    collection(getFirestore(app), "post"),
    { snapshotListenOptions: { includeMetadataChanges: true } }
    //db.collection("post").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {realtimePosts &&
        realtimePosts.docs.map((post) => (
          <Post
            key={post.id}
            message={post.data().message}
            name={post.data().name}
            email={post.data().email}
            image={post.data().image}
            postImage={post.data().postImage}
            timestamp={post.data().timestamp}
          />
        ))}
    </div>
  );
};

export default Posts;
