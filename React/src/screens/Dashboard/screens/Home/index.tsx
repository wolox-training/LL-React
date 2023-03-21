import { AuthContainer } from 'components/Auth';
import { RegisterForm } from 'components/FormControl';

function HomeScreen() {
  return (
    <AuthContainer>
      <RegisterForm />
    </AuthContainer>
  );
}

export default HomeScreen;
