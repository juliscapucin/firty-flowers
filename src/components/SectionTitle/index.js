import "./style.scss";

export default function SectionHeader({ title }) {
  return (
    <div className='section-header'>
      <h2>{title}</h2>
    </div>
  );
}
