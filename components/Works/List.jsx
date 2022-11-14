import Item from '@/components/Works/Item';

const List = ({ projects }) => {
	return (
		<div className='mt-28'>
			{projects.map((project, index) => (
				<Item key={index} project={project} index={index} />
			))}
		</div>
	);
};

export default List;
