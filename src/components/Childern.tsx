import { CSSProperties, PropsWithChildren } from 'react';

type BoxProps = PropsWithChildren<{
  style: CSSProperties
}>;

const Box = ({ children, style }: BoxProps) => {
  return (
    <section
      className="m-4"
      style={{ padding: '1em', border: '5px solid purple', margin: '3em', ...style }}
    >
      {children}
    </section>
  );
};

const Childern = () => {
  return (
    <main className="m-8">
      <Box style={{ color: 'red'}}>
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box style={{ color: 'blue'}}>
          <h2>Another React component with one child.</h2>
        </Box>
        <Box style={{ color: 'black'}}>
          <h2 className="mb-4">A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
    </main>
  );
};

export default Childern;
