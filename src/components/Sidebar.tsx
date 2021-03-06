import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {

  const { data } = useGetLessonsQuery();


  //className={"w-full flex-grow lg:flex lg:items-center lg:w-auto " + (true ? 'block' : 'hidden')}

  return (                                            // w-[358px]
    <aside style={{ scrollbarGutter: 'auto' }} className={"scrollbar-none overflow-y-scroll h-[1200px] w-[358px] bg-gray-700 p-6 border-l border-gray-600 mobile:hidden desktop:block laptop:hidden"}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(
          lesson => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />);
          })}



      </div>
    </aside>

  );
}