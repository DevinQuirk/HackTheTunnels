import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Ruh Roh, Raggy"}>
      <h2>Error 404</h2>
      <h3>The Page you're rookin for couldn't be round!</h3>
      <img id="scaredScooby" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4063b952-b243-40fe-b0d9-b41ceccaa8b7/dfdsjky-f6e2629c-2b6f-4992-9759-cfa3d6d96396.png/v1/fill/w_1280,h_1084/scared_scoob_by_angel2001pizzarat_dfdsjky-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4NCIsInBhdGgiOiJcL2ZcLzQwNjNiOTUyLWIyNDMtNDBmZS1iMGQ5LWI0MWNlY2NhYThiN1wvZGZkc2preS1mNmUyNjI5Yy0yYjZmLTQ5OTItOTc1OS1jZmEzZDZkOTYzOTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4zmz07XUcRqIz7TYGziAdbmcMBoaV1tCiLiqWDJn-7Q" alt="React Image"></img>
    </Layout>
  );
}

export default NotFound;
