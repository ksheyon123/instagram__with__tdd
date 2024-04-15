const LoginOAuth: React.FC = () => {
  return (
    <div className="flex flex-col justify-center max-w-[350px] w-full">
      <div className="mt-2 mb-4 px-3">
        <span className="block text-sm break-words whitespace-pre-line text-center">
          계정 센터에 포함된 계정이므로 이 계정으로 로그인할 수 있습니다.
        </span>
      </div>
      <div>
        <div className="p-4">
          <div className="border-t pt-3 border-gray239"></div>
        </div>
      </div>
    </div>
  );
};

export { LoginOAuth };
