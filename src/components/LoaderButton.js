import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      variant="primary"
      disabled={disabled || isLoading}
      className={className}
      {...props}
    >
      {isLoading && (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="mr-2"
          />
          <span className="sr-only">Loading...</span>
        </>
      )}
      {props.children}
    </Button>
  );
}
