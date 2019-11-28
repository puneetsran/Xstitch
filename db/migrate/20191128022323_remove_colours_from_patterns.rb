class RemoveColoursFromPatterns < ActiveRecord::Migration[5.2]
  def change
    remove_column :patterns, :colours, :array
  end
end
