import { Spin } from "antd";
import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	loading: boolean;
	className?: string;
}

export default function LoadingArea({ children, loading, className }: Props) {
	return (
		<div className="relative p-3">
			{children}
			{loading && (
				<div
					className={clsx(
						"absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center rounded-lg bg-gray-200 bg-opacity-30",
						className
					)}
				>
					<Spin size="large" />
				</div>
			)}
		</div>
	);
}
