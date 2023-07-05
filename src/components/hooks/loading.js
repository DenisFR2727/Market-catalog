import { useSelector } from "react-redux";
import { useMemo } from "react";
import AtomicSpinner from 'atomic-spinner'

function useLoadingStatus() {
     const tovarsLoadingStatus = useSelector((state) => state.tovarsLoadingStatus)

     const loadingTovar = useMemo(() => {
        if (tovarsLoadingStatus === "loading") {
          return <AtomicSpinner />;
        }
      }, [tovarsLoadingStatus]);
    
      const errorLoading = useMemo(() => {
        if (tovarsLoadingStatus === 'error') {
          return (
            <div className="spinner_tovars">
              <h2>ERROR 404</h2>
            </div>
          );
        }
      }, [tovarsLoadingStatus]);

     return { loadingTovar, errorLoading}
}
export default useLoadingStatus;