import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";



// interface LessonResponse {
//   lesson: {
//     title: string;
//     videoId: string;
//     description: string;
//     teacher: {
//       avatarURL: string;
//       bio: string;
//       name: string;
//     }
//   }
// }


export function Event() {
  //let { lessonSlug } = useParams();
  const { slug } = useParams<{ slug: string }>();

  //const { data } = useQuery<LessonResponse>(QUERY_LESSON_BY_SLUG(lessonSlug!));

  return (
    <div className="flex flex-col min-h-screen min-w-min">
      <Header />
      <main className="flex flex-1">
        {
          slug ?
            <Video lessonSlug={slug} />
            :
            <div className="flex-1"></div>}

        <Sidebar />

      </main>

    </div>
  );
}