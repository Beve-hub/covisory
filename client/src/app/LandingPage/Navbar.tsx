'use client'
import { useRouter } from 'next/navigation';
import ButtonFilled from '@/components/ButtonFilled';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold">Logo</h1>
        <ul className="flex gap-4 text-sm">
          <li>Services</li>
          <li>Invest</li>
          <li>Stories</li>
          <li>FQA</li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <p className="cursor-pointer" onClick={() => router.push('/auth/login')}>Login</p>
        <ButtonFilled text="Sign Up" onClick={() => router.push('/auth/register')} />
      </div>
    </div>
  );
};

export default Navbar;