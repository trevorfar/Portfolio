"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import Slider from "./Slider";
import { Slideshow } from "@mui/icons-material";

const ProjectGallery = ({ title, images }: any) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Slideshow className="text-3xl p-2 h-full w-auto bg-black rounded-full hover:scale-110 transition-all" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>INPUT</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will blah blah blah.
          </DialogDescription>
        </DialogHeader>
        {/* <Slider images={images} /> */}
      </DialogContent>
    </Dialog>
  );
};
export default ProjectGallery;
