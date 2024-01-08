import { UserButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
      <h1 className='h1-bold'>Home Page</h1>
    </div>
  );
}
