import { Title, Border, ContainerTitle } from "./style";

export function NamedTitles ({ children, ...props }) {
  return (
    <ContainerTitle >
      <Title {...props}>{children}</Title>
      <Border {...props} />
    </ContainerTitle>
  );
}