import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { BackButton } from "@/components/auth/back-button";
import { Header } from "@/components/auth/header";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";


export const ErrorCard =()=> {
    return (
        <CardWrapper headerLabel="Oops! Something went wrong!"
        backButtonHref="/auth/login"
        backButtonLabel="Backup to login"
        >
            <div className="flex items-center justify-center">
                <ExclamationTriangleIcon className="text-destructive w-4 h-4"/>
            </div>

        </CardWrapper>
    );
};

