import { CheckCircle, Lock } from 'phosphor-react';
import { isPast } from 'date-fns'
import { format } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';

}

export function Lesson(props: LessonProps) {

  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const AvailableDateFormatted = format(props.availableAt, "EEEE' • ' d ' de ' MMMM ' • ' HH:mm", {
    locale: ptBR
  });


  const isActiveLesson = slug === props.slug;

  return (
    <Link to={!isLessonAvailable ? '#' : `/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {AvailableDateFormatted}
      </span>
      <div
        className={classNames(
          'relative rounded border border-gray-500 p-4 mt-2 transition-colors', {
          'group-hover:border-green-500': isLessonAvailable,
          'bg-green-500': isActiveLesson,
          'cursor-not-allowed': !isLessonAvailable,
          'backdrop-grayscale-0 bg-white/20': !isLessonAvailable
        }
        )}>


        <div className={classNames('absolute left-0 top-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-green-500', {
          'block': isActiveLesson,
          'hidden': !isActiveLesson
        })}></div>

        <header className="flex items-center justify-between">
          {
            isLessonAvailable ?
              (<span className={classNames("text-sm font-medium flex items-center gap-2", {
                'text-white': isActiveLesson,
                'text-blue-500': !isActiveLesson,
              })}>
                <CheckCircle size={20} />
                Conteúdo Liberado
              </span>
              ) : (
                <span className="text-orange-500 text-sm font-medium flex items-center gap-2">
                  <Lock size={20} />
                  Em breve
                </span>
              )}
          <span className={classNames("text-xs rounded border text-white py-[0.125rem] px-2 font-bold", {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson && isLessonAvailable,
            'border-gray-300': !isLessonAvailable,

          })}>
            {
              props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'
            }
          </span>
        </header>
        <strong className={classNames(" mt-5 block", {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson,
          'border-gray-300': !isLessonAvailable,
        })}>
          {props.title}
        </strong>
      </div>
    </Link >
  );
}