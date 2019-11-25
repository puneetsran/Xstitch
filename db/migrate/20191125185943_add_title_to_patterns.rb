class AddTitleToPatterns < ActiveRecord::Migration[5.2]
  def change
    add_column :patterns, :title, :string
  end
end
