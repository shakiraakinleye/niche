// for now this component will be in onboarding if we see more need to create mutiple step forms we might need to move it to component/atoms

const StepCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div>{props.children}</div>;
};

export { StepCard };
