import { Link, useParams } from 'react-router-dom';

import { Counter } from './Counter';
import { PostList } from './PostList';
import { TwitContainer } from './Twit';

import './styles.css';

//

enum Section {
  COUNTER = 'counter',
  POSTS = 'posts',
  TWIT = 'twit',
  STATE_MACHINE = 'state-machine',
}
type SectionKey = keyof typeof Section;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sectionKeys: SectionKey[] = Object.keys(Section) as SectionKey[];
const sectionValues = Object.values(Section);

//

export function Storybook() {
  const { tab } = useParams();

  return (
    <div className="Storybook__container">
      <nav>
        {sectionValues.map((section, index) => {
          return (
            <span key={section}>
              <Link to={`../storybook/${section}`}>{section}</Link>
              <span style={{ opacity: 0.5 }}>
                {index < sectionValues.length - 1 && ' | '}
              </span>
            </span>
          );
        })}
      </nav>

      {!tab && <p style={{ textAlign: 'center' }}>Welcome to Storybook</p>}
      <section>
        {tab === Section.COUNTER && <Counter />}
        {tab === Section.POSTS && <PostList />}
        {tab === Section.TWIT && <TwitContainer />}
        {tab === Section.STATE_MACHINE && <div>state</div>}
      </section>
    </div>
  );
}
