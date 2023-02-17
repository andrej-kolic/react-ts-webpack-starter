import { useState } from 'react';

import { Counter } from './Counter';
import { PostList } from './PostList';

import './styles.css';

//

enum Section {
  COUNTER = 'counter',
  POSTS = 'posts',
  STATE_MACHINE = 'state-machine',
}
type SectionKey = keyof typeof Section;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sectionKeys: SectionKey[] = Object.keys(Section) as SectionKey[];
const sectionValues = Object.values(Section);

//

export function Storybook() {
  const [section, setSection] = useState<Section>(Section.COUNTER);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: Section,
  ) => {
    event.preventDefault();
    setSection(section);
  };

  return (
    <div className="Storybook__container">
      <nav>
        {sectionValues.map((section, index) => {
          return (
            <span key={section}>
              <a href="" onClick={(event) => handleClick(event, section)}>
                {section}
              </a>
              <span style={{ opacity: 0.5 }}>
                {index < sectionValues.length - 1 && ' | '}
              </span>
            </span>
          );
        })}
      </nav>

      <section>
        {section === Section.COUNTER && <Counter />}
        {section === Section.POSTS && <PostList />}
        {section === Section.STATE_MACHINE && <div>state machine</div>}
      </section>
    </div>
  );
}
