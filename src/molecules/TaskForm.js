import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { updateShowTaskForm, updateTaskToEdit } from "@store/controls/actions";
import { addTask, updateTask } from "@store/tasks/actions";
// view components
import { SelectDuration } from "@atoms";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";

const TaskForm = () => {
  const showTaskForm = useSelector((state) => state.controls.showTaskForm);
  const taskToEdit = useSelector((state) => state.controls.taskToEdit);
  const dispatch = useDispatch();

  const handleClose = () => {
    formik.resetForm();
    dispatch(updateShowTaskForm({ showTaskForm: false }));
    if (taskToEdit) {
      dispatch(updateTaskToEdit({ taskToEdit: false }));
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: taskToEdit ? taskToEdit.name : "",
      description: taskToEdit ? taskToEdit.description : "",
      duration: taskToEdit ? taskToEdit.duration : "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo requerido"),
      description: Yup.string().required("Campo requerido"),
      duration: Yup.string().required("Campo requerido"),
    }),
    onSubmit: (values, { resetForm }) => {
      handleClose();
      if (taskToEdit) {
        dispatch(
          updateTask({
            uuid: taskToEdit.uuid,
            name: values.name,
            description: values.description,
          })
        );
      } else {
        dispatch(addTask({ ...values }));
      }
      resetForm();
    },
  });

  return (
    <Dialog
      open={showTaskForm}
      onClose={handleClose}
      aria-label="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {taskToEdit ? "Editar " : " Agregar"} tarea
      </DialogTitle>
      <DialogContent style={{ maxWidth: "500px" }}>
        <TextField
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Nombre"
          type="text"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          margin="dense"
          id="description"
          name="description"
          label="Descripción"
          type="text"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
        <SelectDuration
          disabled={taskToEdit ? true : false}
          value={formik.values.duration}
          onChangeSelect={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.duration && Boolean(formik.errors.duration)}
          helperText={formik.touched.duration && formik.errors.duration}
          id="duration"
          name="duration"
          isForm
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <Divider variant="middle" />
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={formik.handleSubmit}
          disabled={!formik.isValid || !formik.dirty}
          type="submit"
          color="primary"
          variant="contained"
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
