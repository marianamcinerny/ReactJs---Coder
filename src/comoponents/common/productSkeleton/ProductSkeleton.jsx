import { Skeleton, Stack } from "@mui/material";

const ProductSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        width={300}
        sx={{ fontSize: "1rem" }}
        height={400}
      />
      <Skeleton variant="text" width={210} height={60} />
      <Skeleton variant="text" width={210} height={60} />
      <Skeleton variant="text" width={210} height={60} />
    </Stack>
  );
};

export default ProductSkeleton;
