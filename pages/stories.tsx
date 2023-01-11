import { useFetch } from "../hooks/useFetch";

type StoryProps = {
  id: number;
  by: string;
  time: number;
  title: string;
  url: string;
};

const Stories = () => {
  const stories = useFetch(
    "https://news-proxy-230704.appspot.com/topstories",
    []
  );

  return (
    <div>
      <h3>Stories</h3>
      {stories.map((story: StoryProps) => {
        const { id, by, time, title, url } = story;

        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              {by} - {new Date(time * 1000).toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Stories;
