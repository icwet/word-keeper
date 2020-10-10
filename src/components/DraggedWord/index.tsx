// Vendor
import React, { FC, useContext, useRef } from "react";
import { DropTargetMonitor, useDrop, useDrag } from "react-dnd";
import { XYCoord } from "dnd-core";
import styled from "styled-components";
// Components
import { StyledWord } from "components/Word";
// Actions
import { ITEM_TYPES } from "components/App/Actions/types";
import { AppContext } from "components/App/App";
import { dragCard } from "components/App/Actions";

interface DragItem {
	index: number;
	type: string;
}
interface DraggedWordProps {
	index: number;
	onClick?: () => void;
}

const StyledDraggedWord = styled(StyledWord)`
	grid-template-columns: auto auto auto 1fr auto;

	&:hover {
		cursor: grab;
	}
`;

export const DraggedWord: FC<DraggedWordProps> = ({ children, index, onClick }) => {
	const ref = useRef<HTMLDivElement>(null);
	const { dispatch } = useContext(AppContext);
	const [, drop] = useDrop({
		accept: ITEM_TYPES.WORD,
		hover(item: DragItem, monitor: DropTargetMonitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
				return;
			}
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			dispatch(dragCard(dragIndex, hoverIndex));
			item.index = hoverIndex;
		},
	});
	const [, drag] = useDrag({
		item: { type: ITEM_TYPES.WORD, index },
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	drag(drop(ref));
	return (
		<StyledDraggedWord onClick={onClick} ref={ref}>
			{children}
		</StyledDraggedWord>
	);
};
