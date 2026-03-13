// app/not-found.tsx
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '@/components/ui/button';

const NotFound: FC = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-red-600">404</h1>
                    <p className="text-2xl mt-4 mb-6">Oops... Page Not Found</p>
                    <Button variant="default" size="lg" asChild>
                        <Link href='/' className="bg-app-primary text-[18px] font-medium  p-[16px] rounded-[0.94rem] mt-6">Go Back to Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
