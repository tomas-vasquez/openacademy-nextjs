import styled from "styled-components";

export const Bar = styled.div`
  width: 1.6rem;
  height: 0.15rem;
  margin-bottom: 0.3rem;
  background-color: #fff;
  transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91), opacity 500ms,
    box-shadow 250ms, background-color 500ms;

  @media (max-width: 600px) {
    width: 1.6rem;
  }

  ${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
		background-color: #212121;
		transform: translateY(8px) rotate(-135deg);
		
	`}

  ${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
		transform: scale(0);
		`}

	${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
			background-color: #212121;
			transform: translateY(-6px) rotate(-45deg);
	`}
`;
